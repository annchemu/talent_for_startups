import React, { useState, useEffect } from "react";

import { db } from './../firebase'
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "@firebase/firestore";


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CircleIcon from '@mui/icons-material/Circle';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Courses(){
    
    const courses_list = [
        {
            id: 1,
            course_name: 'Frontend Web Development',
            description: 'a short description about front end development'
        },
        {
            id: 2,
            course_name: 'Backend Web Development',
            description: 'a short description about backend development'
        },
        {
            id: 3,
            course_name: 'Data analytics',
            description: 'a short description about data analytics'
        },
        {
            id: 4,
            course_name: 'soft skills',
            description: 'a short description about soft skills'
        }
    ]
    const [courses_list_db, setCoursesListDB] = useState([])
    const CoursesCollection = collection(db, "courses")

    const getCourses = async () => {
        const data = await getDocs(CoursesCollection)
        setCoursesListDB(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
      }

    // const [enrolled, setEnrolled] = useState([])
   
    // function enrollUsers(event){
    //     const course_enrolled = event.target.value;

    //     if(event.target.checked){
    //         setEnrolled([ ...enrolled, course_enrolled] )
    //     }else{
    //         // setEnrolled(enrolled.filter(e => e !==course_enrolled))
    //         setEnrolled(enrolled.filter(id=>id !== course_enrolled))
    //     }
    // }
    const [selectedIds, setSelectedIds] = useState([]);
    //monitor the state of a checkbox
    const handleCheckboxChange = (event) => {
        const checkedId = event.target.value;
        if(event.target.checked){
            setSelectedIds([...selectedIds,checkedId])
        }else{
            setSelectedIds(selectedIds.filter(id=>id !== checkedId)) // lambda function
        }
    }

   async function updateEnroll() {
        // let enrolled = 'Yes'
        let enrolled = { enrolled: 'Yes'}
        for( let id in selectedIds){
            const courseDoc = doc(db, "courses", selectedIds[id])
            await updateDoc(courseDoc, enrolled)
            window.location.reload()
        }
        console.log(selectedIds)
        
      }

    useEffect(() => {
        getCourses()
    }, [])
    return(
        <div className="courses">
            <Box>
                <Grid>
                    <CardActionArea >
                        <Card>
                            <CardContent sx={{ flex: 1}}>
                                {/* List interprets to <ul> element */}
                                <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper'}}>
                                   {courses_list_db.map((course)=>(
                                        <ListItem key = {course.id} secondaryAction={
                                            
                                            <Checkbox
                                                value = {course.id}
                                                checked={selectedIds.includes(course.id)}
                                                onChange={(event) => { handleCheckboxChange(event) }}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                                />
                                            }>
                                            <ListItemAvatar>
                                            <Avatar>
                                                <CircleIcon />
                                            </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={course.course_name} secondary={course.description} />
                                        </ListItem>
                                        ))}
                                </List>
                                <Typography>{selectedIds}</Typography>
                                <Button size="small" onClick={updateEnroll} >Enroll</Button>
                                
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
            </Box>
        </div>
    )
}
export default Courses
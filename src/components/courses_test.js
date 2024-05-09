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
import IconButton from '@mui/material/IconButton';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Avatar from '@mui/material/Avatar';
import CircleIcon from '@mui/icons-material/Circle';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function Courses(){

    const courses_list = [
        {
            id: 1,
            course_name: 'Frontend Web Development',
            description: 'A short description on Frontend Web Development'
        },
        {
            id: 2,
            course_name: 'Backend Web Development',
            description: 'A short description on Backend Web Development'
        },
        {
            id: 3,
            course_name: 'Data Analytics',
            description: 'A short description on Data Analytics'
        },
        {
            id: 4,
            course_name: 'Soft Skills',
            description: 'A short description on Soft Skills'
        }
    ]
    const [courses_list_db, setCoursesListDB] = useState([])
    const CoursesCollection = collection(db, "courses")

    //retrieve data
    const getCourses = async () => {
        const data = await getDocs(CoursesCollection)
        setCoursesListDB(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
      }
    //update data
    async function updateEnroll() {
        let enrolled = { enrolled: 'Yes'}
        for( let id in selectedIds){
            //retrieve from our api
            const courseDoc = doc(db, "courses", selectedIds[id])
            //update the values
            await updateDoc(courseDoc, enrolled)
            //update state based on new changes
            window.location.reload()
        }
        console.log(selectedIds)
        
      }

    // const [enrolled, setEnrolled] = useState(1)

    // function enrollUser(){
    //     setEnrolled(enrolled + 1)
    //     alert('Total Students enrolled: ' + enrolled)
    // }

    const [selectedIds, setSelectedIds] = useState([]);

    const handleCheckboxChange = (event) => {
        const checkedId = event.target.value;
        if(event.target.checked){
            setSelectedIds([...selectedIds,checkedId])
        }else{
            setSelectedIds(selectedIds.filter(id=>id !== checkedId))
        }
    
    }
    useEffect(() => {
        getCourses()
    }, [])
    return (
        <div className = "courses">
            <Box>
                <Grid item xs={12} md={6} >
                <CardActionArea >
                    <Card>
                        <CardContent sx={{ flex: 1}}>
                            <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper'}}>
                                {courses_list_db.map((course) => (
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
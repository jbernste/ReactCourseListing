import {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'
import Course from '../components/Course'

const SPACE_ID = 'temp'
const ACCESS_TOKEN = 'temp'

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class CourseList extends Component {
    state={
        courses:[],
        searchString: ''
    }
    cosntructor(){
        super()
        this.getCourses()
    }
    getCourses = () => {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
        .then((response)=>{
            this.setState({courses: response.items})
        })
        .catch((error) => {
            console.log("Error occured while catching data")
            console.log(error)
        })
    }
}


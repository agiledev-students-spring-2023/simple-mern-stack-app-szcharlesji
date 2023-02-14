import { Link } from 'react-router-dom'
import './AboutUs.css'
import chengji from './ChengJi.jpg'
/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

const AboutUs = props => {
  return (
    <>
      <h1>About Us</h1>
      <p>My name is Cheng Ji. I'm a Junior. I love Javascript!</p>
      <p>
        I am majoring in Linguistics and Computer Science. I have previously
        coded in Python, Java, C and R. I am currently learning Javascript and
        React, this MERN stack thing.
        
      </p>
      <p>
        I love traveling and photography. My website is{' '}
        <a href="https://cheng.photos">cheng.photos</a>, but it's expiring soon
        and I can't afford to renew it.

      </p>
        <p>Here is a picture of me:</p>
        <img src={chengji} alt="Cheng Ji" />
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
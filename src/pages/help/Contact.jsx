import { Form, redirect, useActionData } from "react-router-dom"


const Contact = () => {
  const data = useActionData()
  return (
    <div className='contact'>
       <h3>Contact Us</h3>
       <Form method="post" action="/help/contact">
        <label>
            <span>Your Email:</span>
            <input type="email" name="email" required />
        </label>
        <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
        </label>
        {data && data.error && <p>{data.error}</p>}
        <button>Submit</button>
       
       </Form>
    </div>
  )
}

export default Contact


export const contactAction = async ({ request }) =>{
 console.log(request);
 
  try {
    
  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }
  console.log(submission);

  if(submission.message.length < 10){
    return {error: 'message too short, must be at least 10 characters'}
  }

  // redirect
  return redirect('/')
  
  } catch (error) {
    console.log(error);
    
  }

 
}
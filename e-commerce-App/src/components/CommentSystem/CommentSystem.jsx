import  {  useState } from 'react'
import { motion } from 'framer-motion'

function CommentSystem() {
    const [input, setInput] = useState('')
    const [textArea, setTextArea] = useState('')
    const [isCommentPosted, setIsCommentPosted] = useState(false)
    const [newComment,setNewComment]=useState([])
    
    
    console.log(`input:${input}`);
    console.log(`textArea:${textArea}`);

    function submitHandler() {
       if(input&&textArea) {
        setIsCommentPosted(true) 
        const comment= {
            input,
            textArea
        }
        //update newcomment array to new comment
        setNewComment([...newComment,comment])
        console.log(newComment)
        setInput('')
        setTextArea('')
       }
    }


    return (
        <div className=' w-full bg-gradient-to-r from-[#505064] to-[#111132] flex flex-col items-center justify-center  '>
          
            <motion.input placeholder='Name' initial={{scaleX:0}} whileInView={{scaleX:1,x:0}} transition={{duration:2}} type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}  className='p-[10px] w-[38rem] mt-[6rem] mb-[1rem] rounded-xl max-[901px]:mt-[2rem] max-[626px]:w-[31rem] max-[510px]:w-[26rem]  max-[426px]:w-[21rem]  max-[358px]:w-[17rem]' />
            <motion.textarea placeholder='SHEAR YOUR EXPERINSE WHITE US...' initial={{scaleX:0}} whileInView={{scaleX:1,x:0}} transition={{duration:2}} value={textArea} onChange={(e)=>{setTextArea(e.target.value)}} className='w-[38rem] h-[13vh] p-[10px] rounded-2xl max-[626px]:w-[31rem] max-[510px]:w-[26rem] max-[426px]:w-[21rem] max-[358px]:w-[17rem]'></motion.textarea>
            <button disabled={!input&& !textArea}  className='mt-[1rem] border-2 bg-blue-600  p-[12px] w-[14rem] text-white rounded-[3rem]' style={{backgroundColor:!input||!textArea ?"gray":"",cursor:!input||!textArea ?"not-allowed":"pointer"}}  onClick={submitHandler}>AddComment</button>
        
            {isCommentPosted && (
                newComment.map((item,i)=>{
                    return( <div key={i} className='w-[19rem] break-words bg-slate-500 mt-[2rem] mb-[1rem] p-[10px] rounded-[13px] max-[426px]:w-[15rem]' style={{marginLeft: i%2 ==0 ?'-18%':'18%'}}>
                        <p className='border-dotted mt-[.5rem] mb-[.5rem] '>{item.input}</p>
                        <p className='border-dotted'>{item.textArea}</p>
                     </div>)
                })
               
            )}
          <div className='w-full h-[2rem]'>
            
          </div>
        </div>
    )
}

export default CommentSystem
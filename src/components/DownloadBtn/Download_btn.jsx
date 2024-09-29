import './Download_btn.css'
import resume from '../../assets/Resume.pdf'
const Downloadbtn = () => {
    return (<>
    
<div class="container">
  <label class="label">
    <input type="checkbox" class="input" />
    <span class="circle"
      ><svg
        class="icon"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 19V5m0 14-4-4m4 4 4-4"
        ></path>
      </svg>
      <div class="square"></div>
    </span>
    <p class="title">Download CV</p>
    <p class="title"><a href={resume} download='Resume'>open</a></p>
  </label>
</div>

    
    </>)
}

export default Downloadbtn

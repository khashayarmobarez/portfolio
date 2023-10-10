import React from 'react';

const Contact = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-[4rem] md:mt-[8rem] w-full'>
            
            <h1 className=' text-[#64FFDA] font-semibold text-xl md:text-3xl'>get in touch!</h1>
            <p className='text-center w-4/5 md:w-2/3 mt-4' >I can help you with any questions or issues related to the website development or malfunctionings and any tech problems you may have. I have extensive experience and knowledge in technology and I’m happy to share it with you.</p>
            <h1 className=' text-[#64FFDA] text-center text-base w-3/5 mt-5 md:hidden'>scroll down the booking section to book a meeting</h1>
            <div className='w-4/5 md:w-2/3 md:h-[43rem] h-auto bg-[#F5F3F0] rounded-lg mt-1 md:mt-4'>
                <div dangerouslySetInnerHTML={{ __html: `
                    <!-- Google Calendar Appointment Scheduling begin -->
                    <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ16tkrGBbwJtVhxpiJwWOCrGySgVe-gRcmGxJiqTATPgBcHqzgXBrOYRikh-ZYQOUE-UVnrfMVp?gv=true" style="border: 5px" width="100%" height="700" frameborder="0"></iframe>
                    <!-- end Google Calendar Appointment Scheduling -->
                    `}} ></div>
            </div
            
            >
        </div>
    );
};

export default Contact;
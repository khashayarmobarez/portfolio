import React from 'react';

const Contact = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-[10rem] w-full'>
            <div className='w-3/5 md:w-2/3 md:h-[43rem] h-auto bg-[#F5F3F0] rounded-lg'>
                <div dangerouslySetInnerHTML={{ __html: `
                    <!-- Google Calendar Appointment Scheduling begin -->
                    <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ16tkrGBbwJtVhxpiJwWOCrGySgVe-gRcmGxJiqTATPgBcHqzgXBrOYRikh-ZYQOUE-UVnrfMVp?gv=true" style="border: 5px" width="100%" height="700" frameborder="0"></iframe>
                    <!-- end Google Calendar Appointment Scheduling -->
                    `}} ></div>
            </div>
        </div>
    );
};

export default Contact;
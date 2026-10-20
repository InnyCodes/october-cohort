function Sqi() {
    const courseInfo = [
        {
            img: "https://sqi.edu.ng/wp-content/uploads/2023/01/software-engineering-630x330-1.webp",
            header: "Software Engineering",
            span: "+ AI",
            paras: [
                "Software Engineering is one of the most in-demand jobs across the globe today.",
                "Software Engineers are also known as programmers, developers or coders.They are the ones behind all the apps and software you use today either on your ….",
            ],
            link: "",
        },
        {
            img: "https://sqi.edu.ng/wp-content/uploads/2023/01/DATA-SQI.jpg",
            header: "Data Science",
            span: "+ AI",
            paras: [
                "The eruption of data is transforming individuals and businesses",
                "Companies either big or small are now expecting their business decisions to be based on data-led insight.",
                "Data specialists have a tremendous impact on…",
            ],
            link: "",
            className: "upward-card",
        },
        {
            img: "https://sqi.edu.ng/wp-content/uploads/2026/07/Untitled-design-20.png",
            header: "Generative",
            span: "AI",
            paras: [
                "Harness the power of Artificial Intelligence to create, innovate, and work smarter. Learn how to boost productivity, build applications with Vibe Coding, design stunning visuals and user interfaces, analyze data, and detect cyber threats using today’s leading AI tools.",
                "Gain practical, job-ready skills that prepare you for careers in technology, business, design, marketing, and beyond empowering you to thrive in the AI-driven future..",
            ],
            link: "",
        },
        {
            img: "https://sqi.edu.ng/wp-content/uploads/2023/03/digital-literacy.jpg",
            header: "Digital Workplace Proficiency",
            span: "+ AI",
            paras: [
                "This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register.",
                "In this course, you will learn about the technologies that drive our computerized society…",
            ],
            link: "",
        },
    ];

    const Card = ({img, header, span, paras, link}) => (
            <div className="card">
                <img src={img} className="card-image"/>
                <h2>{header} <span>{span}</span></h2>
                {
                    paras.map((text, i)=>(
                        <p key={i}>{text}</p>
                    ))
                }
                <a href="">Learn More</a>
            </div>
    )

    return(
        <div className="sqi-container">
            <div>
                <h1>Our Top Courses</h1>
                <p>Take a look at some of our popular courses</p>
                <p><a href="">View all courses  </a></p>
            </div>

            <section className="grid">

                <div className="col">
                    {
                        courseInfo.slice(0,2).map(course => (
                            <Card 
                                key={course.header} 
                                img={course.img}
                                header={course.header}
                                span={course.span}
                                paras={course.paras}
                                link={course.link}
                            />
                        ))
                    }

                    </div>

                    <div className="col right-col">
                        {
                        courseInfo.slice(2).map(course => (
                            <Card 
                                key={course.header} 
                                img={course.img}
                                header={course.header}
                                span={course.span}
                                paras={course.paras}
                                link={course.link}
                            />
                        ))
                    }
                    </div>
    
            </section>
        </div>
    )
}

export default Sqi
import certificateImg from '../../src/assets/certificate.jpg';
import listImg from '../../src/assets/list.jpg';
import studentImg from '../../src/assets/students.jpg';

const HomePage = () => {
  return (
    <div id="home-page">
        <h2>Our Mission: Your Success</h2>  
        <section>
            <img src={studentImg} alt="Students"/>
            <div>
                <h3>What we do</h3>
                <p>
                    ReactMentoring is a platform for React developers to find mentors
                    who can help them with their React-related questions and problems.
                    We are a community of React developers who want to help each other
                    succeed.
                </p>
            </div>
        </section>
        <section>
            <img src={certificateImg} alt="Certificate"/>
            <div>
                <h3>What you get</h3>
                <p>
                No matter if you are a beginner or an experienced React developer,
                we are here to help you level up your React skills.
                </p>
            </div>
        </section>
        <section>
            <img src={listImg} alt="List"/>
            <div>
                <h3>What we offer</h3>
                <p>
                We offer a variety of mentoring sessions, from one-on-one mentoring
            to group mentoring sessions. Browse our available sessions to find
            the one that best fits your needs.
                </p>
            </div>
        </section>
    </div>
  )
}

export default HomePage
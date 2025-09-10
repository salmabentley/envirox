import React from 'react'

const WaterConference = () => {
  return (
    <main>
        {/* main */}
        <section style={{display:'flex', alignItems: 'center'}}>
            <aside style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{maxWidth: '80%'}}>
                    <h1>United Water Conference</h1>
                    <p>Join us at the UWCSEA United Water Conference this May! We are looking for students with a vested interest in making a difference and helping address key sustainability issues. Rather than taking a broad lens on sustainability, we are specifically addressing the issue of Water Conservation. </p>
                </div>
            </aside>
            <aside style={{display:'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'linear-gradient(to bottom right, #cfeafa,rgb(118, 177, 224),rgb(74, 142, 230))'}}>
                <div style={{maxWidth: '80%', color: 'rgb(0, 77, 112)'}}>
                    <h2>Date: <i style={{fontWeight: 300}}>May 31st 2025</i></h2>
                    <h2>Venue: <i style={{fontWeight: 300}}>Tent Plaza, Main Hall, MPH</i></h2>
                    <h2>Location: <i style={{fontWeight: 300}}>UWCSEA Dover, 1207 Dover Rd, Singapore 139654</i></h2>
                    <h2>Time: <i style={{fontWeight: 300}}>9AM-1PM</i></h2>    
                </div>
            </aside>    
        </section> 

        <section style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{maxWidth: '70%', lineHeight: '1.5em', border: '5px solid rgb(22, 66, 92)', boxShadow: 'rgb(169, 173, 175) 0 0 20px', padding: '2%'}}>
                    <h3 style={{lineHeight: '1.5em'}}>We invite students from any school in Singapore to come in a group of 4-6 individuals to showcase a unique, innovative idea for addressing water scarcity and conserving water on a school, local or global level. These teams will get a chance to showcase their presentations, with the best group winning special recognition. Any student from any school in Singapore is free to apply, with a maximum group of  ~200 finalists, or 40 teams. </h3>
                    <p>Students who successfully apply into the event will be invited to a day-long conference, where they will be able to deliver their presentations, as well as engage in a series of dedicated workshops on water conservation to learn practical skills and key information. Additionally, they will be able to hear from expert guest speakers from their field. </p>
                </div>
        </section>

        {/* itinerary */}

        <section style={{padding: '2% 0'}}>
            <h2 style={{fontSize: '2rem'}}>Itinerary</h2> <br />
            <div className="itinerary-container">
                <div className="itinerary">
                    <h2>Opening Presentation - 15 Minutes</h2>
                    <p>A short introduction to the conference and organizing team, as well as a summary of the rest of the event and initial discussion of water scarcity as a unique contemporary global challenge. The expectations for conduct will also be set here
                    </p>
                </div>
                <div className="itinerary">
                    <h2>Guest Speakers - 30 Minute Panel + 15 Minute Audience Qs </h2>
                    <p>Guest speakers from different fields and perspectives of water conservation will be invited to speak at a student-moderated panel exploring the issue and providing insights towards their approaches to water conservation as professionals. </p>
                </div>
                <div className="itinerary">
                    <h2>Networking Space/ Exhibition Presentation - 1 hour</h2>
                    <p>Students will be given time to explore and visit the different exhibitions created. Judges will also be able to see the best exhibition.  A time for students to meet each other and potentially meet the guest speakers as well. We would like students to get the opportunity to relax, mingle and converse about the topics that they explore. </p>
                </div>
                <div className="itinerary">
                    <h2>Workshop 1: Water-Conscious Consumption - an Upcycling Workshop - 30 minutes</h2>
                    <p>Students will engage in a quiz/upcycling workshop where the most water-intensive materials would be identified, then used to make a product - e.g. if a student correctly identifies “textiles” as a water-intensive material, they would then be able to upcycle a textile product.</p>
                </div>
                <div className="itinerary">
                    <h2>Workshop 2: Policy Solutions - A Mock International Forum - 30 minutes</h2>
                    <p>Students, in their groups, will receive a water policy/strategy brief from any one of the following actors - a national government, a multinational corporation (MNC) or an NGO. They will then participate in small-group forums (each with multiple countries, MNCs, and NGOs) to debate their views around a central question to develop a global policy solution for water conservation that is favorable to them.</p>
                </div>
                <div className="itinerary">
                    <h2>Closing Ceremony - 30 minutes</h2>
                    <p>Wrapping up the event by presenting awards and giving a final keynote about the importance of water conservation, and its relevance to teenagers.</p>
                </div>
            </div>
        </section>

        {/* guest */}

        <section style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <aside style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '50%'}}>
                    <h2>Guest Speaker</h2>
                    <h4>Hannah Oh 03'</h4>
                    <p>Hannah Oh is a UWCSEA Alumni from the graduating class of 2003. She currently works in the water industry in Singapore as an impact investor. At United Water Conference, she will share her insights and expertise on climate resilience, innovation and water stewardship. This panel will be student moderated by our EnviroX leaders to explore approaches towards water conservation. Please feel free to reach out to any EnviroX members for more details!</p>
                </div>
            </aside>
            <aside style={{backgroundImage:"url('https://scontent.fsin14-2.fna.fbcdn.net/v/t39.30808-6/502735484_1127375686083209_8942514696730944965_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0qxCpZbwjPEQ7kNvwGRW0-5&_nc_oc=AdkO9kgfj2PociMUHEtj_0SB_bxgHzx3rzkbTlgkytxNB009VT1vf7XF7bA1LpqEosY&_nc_zt=23&_nc_ht=scontent.fsin14-2.fna&_nc_gid=2ZobgtZBaRWrJqMeU8RCgg&oh=00_AfYf-d2WqFct_EVOaMSXBOwcrP52myF6io67YhlTcXh1PQ&oe=68C700B9')", backgroundPosition: 'right'}}></aside>
        </section>

        {/* apply */}

        <section style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <aside style={{lineHeight: '1.5rem', textAlign: 'left', padding: '5%'}}>
                <h2>Applying for the Event</h2>
                <ul style={{maxWidth: '80%'}}>
                    <li>Open to all students from Grades 9-12 studying at UWCSEA Dover, East, TTS, and ACS.</li>
                    <li>Students will participate in project presentations in groups of 4-6.</li>
                    <li>Projects should focus on water-related topics, including research, NGO initiatives, or sustainability solutions.</li> <br />
                </ul>
                    <i> <span style={{fontSize: '1.2rem', fontWeight: '500'}}>On the day:</span></i>
                    <ul>

                        <li>Students will showcase their projects to each other in form of booth presentations</li>
                        <li>Students will be given votes for the most innovative and impactful project presentations</li>
                        <li>A structured award system will recognize students with the highest number of votes with special prizes.</li>
                    </ul>
                    
            </aside>
            <aside>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd2OO28SdYwn-7I3O9nclakqsFv1TIZc2hgNxjrXKNwWZMUtg/viewform?embedded=true" width="100%" height="80%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </aside>
        </section> 
    </main>
  )
}

export default WaterConference
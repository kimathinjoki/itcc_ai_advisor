import React from "react";

function About(){

    return(
      <>
        <section className="bg-transparent dark:text-black">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl">About  <span className="text-orange-400">ITCC</span></h2>
            <p className="mt-4 mb-8 dark:text-gray-700 font-semibold">Information Technology and Cybersecurity Club</p>
            <div className="space-y-4">
              <details className="w-full border border-black rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What is our mission?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-800">The ITCC helps students enhance their technical and business skills to ethically address business and societal needs, fosters power skills and professional development among students, and provides a safe community for students to learn, connect, and thrive </p>
              </details>
              <details className="w-full border  border-black rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What are our Goals</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-800">
                  <ul>
                    <li>• To organize workshops or events related to Information Technology (IT), Data, Cybersecurity, or other emerging technologies.</li>
                    <li>•	To organize workshops or events related to power skills, ethics, or career development</li>
                    <li>•	To create opportunities for students to connect with industry and community stakeholders.</li>
                    <li>•	To encourage and facilitate student participation in technical or business competitions.</li>
                    <li>•	To foster a sense of community through all its events.</li>
                  </ul> 
                  </p>
              </details>
              <details className="w-full border  border-black rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What are the membership eligibility?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-800"> Membership is open to all students enrolled in the University of Missouri-St. Louis maintained by support of the goals and objectives of the Club, attending at least one of the organization’s meetings and formal functions in a semester.
 </p>
              </details>
            </div>
          </div>
        </section>
      </>       
    )
}

export default About;
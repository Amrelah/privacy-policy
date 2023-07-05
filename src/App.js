import './App.css';

function App() {
    const current = new Date();
    const year = `${current.getFullYear()}`;
    return (
        <div className='w-full h-full'>
            <div className='bg-yellow-500 h-16 fixed w-full'>
                <div className='text-center font-bold text-xl w-full'>Wez-Ader|ወዝ-አደር Jobs</div>
                <div className='text-center font-bold text-xl w-full'>Privacy Policy</div>
            </div>
            <div className='w-full h-[100%-16px] pt-16 overflow-x-clip '>
                <div className='p-10 text-justify'>
                    <div
                        className='shadow-[2px_0px_16px_4px_rgb(0,0,0,0.25)] shadow-slate-300 max-w-[1200px] mx-auto p-6 w-full  rounded-2xl'>
                        This Privacy Policy outlines how "Wez-Ader|ወዝ-አደር Jobs" collects, uses, and
                        protects the information of its users. By using the App, you agree to the terms
                        and practices described in this policy.
                        <br/><br/>
                        <ol style={{listStyleType: 'decimal'}}>
                            <li>
                                <b>Information Collection</b>
                                <ol>
                                    <li>Connection Status: The App may collect information about the status of your
                                        internet connection to ensure proper functionality and improve user experience.</li>
                                    <li>Phone Call: The App may request permission to access your phone call
                                        information to enable certain features, such as initiating phone calls directly
                                        from job listings or saving contact details related to job opportunities. The
                                        App does not record or store phone call data.</li>
                                </ol>
                            </li>
                            <li>
                            <b>Data Usage</b>
                                <ol>
                                    <li>Usage of Collected Information: The information collected by the App,
                                        including connection status and phone call permission, is used solely for the
                                        purpose of providing and enhancing the App's features and functionality. This
                                        includes displaying job listings, facilitating job applications, and optimizing
                                        user experience.</li>
                                    <li>Data Sharing: The App does not share any personal information collected
                                        through connection status or phone call permission with third parties. Your data
                                        remains confidential and is not sold, rented, or disclosed unless required by
                                        law or with your explicit consent.</li>
                                </ol>
                            </li>
                            <li><b>Security Measures</b>
                                <ol>
                                    <li>Data Security: The App employs industry-standard security measures to
                                        protect user information against unauthorized access, alteration, or disclosure.
                                        These measures include encryption, secure storage, and access controls.</li>
                                </ol>
                            </li>
                            <li><b>User Control and Consent</b>
                                <ol>
                                    <li>User Rights: Users have the right to access, modify, or delete their
                                        personal information collected by the App. You may exercise these rights by
                                        contacting us at <a href='mailto: hawdtechnology@gmail.com'>hawdtechnology@gmail.com</a>.</li>
                                    <li>Consent: By using the App, you consent to the collection, use, and
                                        processing of your information as described in this Privacy Policy.</li>
                                </ol>
                            </li>
                            <li><b>Updates to the Privacy Policy</b>
                                <ol>
                                    <li>Notification: We may update this Privacy Policy from time to time. Users
                                        will be notified of any material changes to the policy through the App or other
                                        means.</li>
                                    <li>
                                        Continued Use: By continuing to use the App after such changes, you agree to the
                                        updated Privacy Policy.</li>
                                </ol>
                            </li>
                        </ol>

                    </div>
                </div>
                <div
                    className='text-center relative bottom-0 w-full bg-purple-400 py-3 text-white'>
                    <p>Hawd Technology</p>
                    <p>&copy; All Rights Reserved {year}</p>
                </div>
            </div>
        </div>
    );
}

export default App;

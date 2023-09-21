import "../css/pages/page.css";

export default function Privacy(){
    document.title = "Privacy · SwiftCalc";

    return (
        <main className="privacy-policy">
            <article className="privacy-article animate">
                <h1 className="title">Privacy</h1>
                <p className="policy">
                    SwiftCalc respects your privacy and will never share any of the information you provide to us with anyone else, 
                    unless required by law or for legal reasons. <br /><br />
                    SwiftCalc works perfectly fine even without your personal informations, and you can keep
                    using the app without personalized ads. <br /><br />
                    If you give consent to use your data for personalized ads, that data <b>WON'T</b> be stored by SwiftCalc.
                </p>
            </article>
        </main>
    )
}
import "../css/pages/page.css"

export default function PageNotFound() {
    return (
        <main className="page-not-found">
            <section className="error animate">
                <h1 className="title">404<h2 className="subtitle">Page Not Found</h2></h1>
                <br />
                <p className="message">The URL you are looking for was not found on this page.</p>
            </section>
        </main>
    )
}
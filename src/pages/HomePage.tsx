import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function HomePage() {
    return (
        <div className="min-h-screen bg-gh-bg flex flex-col">
            <Header />

            <img src="https://preview.redd.it/dx7rtr7pfwq41.png?width=1080&crop=smart&auto=webp&s=9e44dbc8563374344b313e4b6574c7e33ba346d6" alt="Lonely Gods Esports Banner" className="w-full h-64 object-cover" />

            <main className="bg-gh-bg text-gh-text p-8">
                <h1 className="text-4xl font-bold mb-4">Lonely Gods Esports</h1>
                <p className="text-lg mb-6">Welcome to the official website of Lonely Gods Esports! We are a competitive gaming organization dedicated to excellence in esports. Our teams compete in valorant, striving for victory and fostering a strong community of gamers.</p>

                <section id="news" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">New team roster announced for upcoming tournament season.</li>
                        <li className="mb-2">Our high team has secured a spot in the playoffs of the premier championship.</li>
                        <li className="mb-2">Community event scheduled for next weekend - stay tuned for more details!</li>
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default HomePage;
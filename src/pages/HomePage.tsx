import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function HomePage() {
    return (
        <div className="min-h-screen bg-gh-bg flex flex-col">
            <Header />

            <img src="https://preview.redd.it/dx7rtr7pfwq41.png?width=1080&crop=smart&auto=webp&s=9e44dbc8563374344b313e4b6574c7e33ba346d6" alt="Lonely Gods Esports Banner" className="w-full h-64 object-cover" />

            <main className="bg-gh-bg text-gh-text p-8">
                <h1 className="text-4xl font-bold mb-4">Lonely Gods Esports</h1>
            </main>

            <Footer />
        </div>
    );
}

export default HomePage;
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function HomePage() {
    return (
        <div className="min-h-screen bg-gh-bg flex flex-col">
            <Header />

            <main className="bg-gh-bg text-gh-text p-8">
                <h1 className="text-4xl font-bold mb-4">Lonely Gods Esports</h1>
            </main>

            <Footer />
        </div>
    );
}

export default HomePage;
function NewsBox({ title, description, url }: { title: string; description: string; url: string }) {
    return (
        <div className="bg-gh-card border border-gh-border p-4 rounded-md hover:border-vlr-red transition-all cursor-pointer group hover:shadow-[0_0_15px_rgba(255,70,85,0.1)]">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-lg mb-4">{description}</p>
            <a href={url} className="text-blue-500 hover:underline">Read more</a>
        </div>
    );
}

export default NewsBox;
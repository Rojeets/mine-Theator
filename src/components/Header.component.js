import { useState } from "react";
import { Link } from "react-router-dom";



export default function SearchBar({ clicked }) {
    const [search, setSearch] = useState();
    const [type, setType] = useState();
    const handleClick = () => {
        clicked(search, type);
    }
    return (
        <>
            <header style={{ maxWidth: "100%", padding: "20px", background: "#1c1c1c", color: "white", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <h1 style={{ margin: 0, color: "white", textDecoration: "none", }}>🎬 Movie Explorer</h1>

                <div style={{ display: "flex", gap: "10px" }}>
                    <input
                        type="text"
                        placeholder="Search movies or series..."
                        id="search"
                        style={{ padding: "8px", fontSize: "16px" }}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select id="type" value={type} style={{ padding: "8px", fontSize: "16px" }} onChange={(e) => setType(e.target.value)}>
                        <option value="">All Type</option>
                        <option value="movie">movie</option>
                        <option value="episode">episode</option>
                        <option value="series">series</option>
                    </select>

                    <button style={{ padding: "8px 16px", fontSize: "16px" }} onClick={handleClick}><Link to={"/search"} style={{ textDecoration: "none", color: "black" }}>Search</Link></button>


                    <button style={{
                        padding: "10px",
                        fontSize: "34px",
                        background: "none",
                        border: "none"

                    }}><Link to={"/"} style={{
                        textDecoration: "none",
                    }}>⭐</Link></button>
                </div>
            </header>

        </>
    )
}
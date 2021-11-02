import React from "react";
import './SearchList.css'

export const SearchList = () => {
    return (
        <div className="search-list">
            <div className="search-item">
                <a href="#">
                    <div className="search-item-avatar">
                        <img src="/profile7.jpg" />
                    </div>
                    <div className="search-item-info">
                        <span className="search-item-info-username">Dua Lipa</span><br/><span>@tech-no</span>
                    </div>
                </a>
            </div>

            {/* FAKE */}
            <div className="search-item">
                <a href="#">
                    <div className="search-item-avatar">
                        <img src="/profile7.jpg" />
                    </div>
                    <div className="search-item-info">
                        <span className="search-item-info-username">Dua Lipa</span><br/><span>@tech-no</span>
                    </div>
                </a>
            </div>
            <div className="search-item">
                <a href="#">
                    <div className="search-item-avatar">
                        <img src="/profile7.jpg" />
                    </div>
                    <div className="search-item-info">
                        <span className="search-item-info-username">Dua Lipa</span><br/><span>@tech-no</span>
                    </div>
                </a>
            </div>
        </div>
    );
}
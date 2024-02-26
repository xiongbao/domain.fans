import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"] }) ${montserrat.className};

export default function Home() {
  return (
    <main
      className={`px-24 font-[montserrat]`}
    >
      <div className="flex gap-10 h-24 items-center justify-between">
        <h1 className="flex items-center gap-2 font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 120 120"><g clip-path="url(#a)"><path fill="#00F" d="M107.57 23.44C95.77 8.08 77.99.02 60 .01V0H0v46l20-4V20h40c22.09 0 40 17.91 40 40s-17.91 40-40 40H20V70l30-6V44L0 54v66h60v-.01c12.77.01 25.65-4.03 36.56-12.42 26.28-20.19 31.21-57.86 11.01-84.13Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h120v120H0z"/></clipPath></defs></svg>
          <span className="flex flex-col gap-0.5 text-m leading-none uppercase font-bold">
            <span>Domain</span>
            <span>Fans</span>
          </span>
        </h1>
        <nav>
          <ul className="flex gap-10 text-sm">
            <li><a href="">Domain Cards</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div>
        <p className="text-xl">Premium domain names for sale,<br/><strong>Be Unique</strong>, <strong>Memorable</strong>, <br/><strong>Searchable</strong>, <strong>Short</strong>, and <strong>Brandable</strong>.</p>
      </div>
      <div className="site-actions">
        <ul className="domain-cates">
          <li className="cate-item">
            <a className="btn-tab" href="">All</a>
          </li>
          <li className="cate-item">
            <a className="btn-tab current" href="">Short</a>
          </li>
          <li className="cate-item">
            <a className="btn-tab" href="">Brand</a>
          </li>
          <li className="cate-item">
            <a className="btn-tab" href="">Only Fav</a>
          </li>
        </ul>
        <div className="domain-views">
          <button className="btn-view">
            <span className="btn-text">list</span>
            <span className="btn-icon"></span>
          </button>
        </div>
      </div>
      <div className="domain-cards">
        <div className="domain-item">
          <div className="domain-info">
            <h2 className="domain-name">design.tools</h2>
            <p className="domain-action">
              <a href="" className="domain-whois" title="whois">
                <svg width="16" height="16" viewBox="0 0 48 48"><path d="M0 0h48v48h-48z" fill="none"/><path d="M23.99 4c-11.05 0-19.99 8.95-19.99 20s8.94 20 19.99 20c11.05 0 20.01-8.95 20.01-20s-8.96-20-20.01-20zm13.85 12h-5.9c-.65-2.5-1.56-4.9-2.76-7.12 3.68 1.26 6.74 3.81 8.66 7.12zm-13.84-7.93c1.67 2.4 2.97 5.07 3.82 7.93h-7.64c.85-2.86 2.15-5.53 3.82-7.93zm-15.48 19.93c-.33-1.28-.52-2.62-.52-4s.19-2.72.52-4h6.75c-.16 1.31-.27 2.64-.27 4 0 1.36.11 2.69.28 4h-6.76zm1.63 4h5.9c.65 2.5 1.56 4.9 2.76 7.13-3.68-1.26-6.74-3.82-8.66-7.13zm5.9-16h-5.9c1.92-3.31 4.98-5.87 8.66-7.13-1.2 2.23-2.11 4.63-2.76 7.13zm7.95 23.93c-1.66-2.4-2.96-5.07-3.82-7.93h7.64c-.86 2.86-2.16 5.53-3.82 7.93zm4.68-11.93h-9.36c-.19-1.31-.32-2.64-.32-4 0-1.36.13-2.69.32-4h9.36c.19 1.31.32 2.64.32 4 0 1.36-.13 2.69-.32 4zm.51 11.12c1.2-2.23 2.11-4.62 2.76-7.12h5.9c-1.93 3.31-4.99 5.86-8.66 7.12zm3.53-11.12c.16-1.31.28-2.64.28-4 0-1.36-.11-2.69-.28-4h6.75c.33 1.28.53 2.62.53 4s-.19 2.72-.53 4h-6.75z"/></svg>
              </a>
              <span className="domain-sale">
                <a href="" className="domain-btn btn-offer">Make offer</a>
              </span>
            </p>
          </div>
        </div>
        <div className="domain-item">
          <div className="domain-info">
            <h2 className="domain-name">dns.community</h2>
            <p className="domain-tags">
              <span className="domain-tag">brand</span>
              <span className="domain-tag">design</span>
              <span className="domain-tag">memorable</span>
            </p>
            <p className="domain-action">
              <a href="" className="domain-whois" title="whois">
                <svg width="16" height="16" viewBox="0 0 48 48"><path d="M0 0h48v48h-48z" fill="none"/><path d="M23.99 4c-11.05 0-19.99 8.95-19.99 20s8.94 20 19.99 20c11.05 0 20.01-8.95 20.01-20s-8.96-20-20.01-20zm13.85 12h-5.9c-.65-2.5-1.56-4.9-2.76-7.12 3.68 1.26 6.74 3.81 8.66 7.12zm-13.84-7.93c1.67 2.4 2.97 5.07 3.82 7.93h-7.64c.85-2.86 2.15-5.53 3.82-7.93zm-15.48 19.93c-.33-1.28-.52-2.62-.52-4s.19-2.72.52-4h6.75c-.16 1.31-.27 2.64-.27 4 0 1.36.11 2.69.28 4h-6.76zm1.63 4h5.9c.65 2.5 1.56 4.9 2.76 7.13-3.68-1.26-6.74-3.82-8.66-7.13zm5.9-16h-5.9c1.92-3.31 4.98-5.87 8.66-7.13-1.2 2.23-2.11 4.63-2.76 7.13zm7.95 23.93c-1.66-2.4-2.96-5.07-3.82-7.93h7.64c-.86 2.86-2.16 5.53-3.82 7.93zm4.68-11.93h-9.36c-.19-1.31-.32-2.64-.32-4 0-1.36.13-2.69.32-4h9.36c.19 1.31.32 2.64.32 4 0 1.36-.13 2.69-.32 4zm.51 11.12c1.2-2.23 2.11-4.62 2.76-7.12h5.9c-1.93 3.31-4.99 5.86-8.66 7.12zm3.53-11.12c.16-1.31.28-2.64.28-4 0-1.36-.11-2.69-.28-4h6.75c.33 1.28.53 2.62.53 4s-.19 2.72-.53 4h-6.75z"/></svg>
              </a>
              <span className="domain-sale">
                <strong className="domain-price">$39,238</strong>
                <a href="" className="domain-btn btn-buy">Buy it now</a>
              </span>
            </p>
          </div>
        </div>
        <div className="domain-item">
          <div className="domain-info">
            <h2 className="domain-name">highalpha.com</h2>
            <p className="domain-tags">
              <span className="domain-tag">brand</span>
              <span className="domain-tag">design</span>
              <span className="domain-tag">memorable</span>
            </p>
            <p className="domain-action">
              <a href="" className="domain-whois" title="whois">
                <svg width="16" height="16" viewBox="0 0 48 48"><path d="M0 0h48v48h-48z" fill="none"/><path d="M23.99 4c-11.05 0-19.99 8.95-19.99 20s8.94 20 19.99 20c11.05 0 20.01-8.95 20.01-20s-8.96-20-20.01-20zm13.85 12h-5.9c-.65-2.5-1.56-4.9-2.76-7.12 3.68 1.26 6.74 3.81 8.66 7.12zm-13.84-7.93c1.67 2.4 2.97 5.07 3.82 7.93h-7.64c.85-2.86 2.15-5.53 3.82-7.93zm-15.48 19.93c-.33-1.28-.52-2.62-.52-4s.19-2.72.52-4h6.75c-.16 1.31-.27 2.64-.27 4 0 1.36.11 2.69.28 4h-6.76zm1.63 4h5.9c.65 2.5 1.56 4.9 2.76 7.13-3.68-1.26-6.74-3.82-8.66-7.13zm5.9-16h-5.9c1.92-3.31 4.98-5.87 8.66-7.13-1.2 2.23-2.11 4.63-2.76 7.13zm7.95 23.93c-1.66-2.4-2.96-5.07-3.82-7.93h7.64c-.86 2.86-2.16 5.53-3.82 7.93zm4.68-11.93h-9.36c-.19-1.31-.32-2.64-.32-4 0-1.36.13-2.69.32-4h9.36c.19 1.31.32 2.64.32 4 0 1.36-.13 2.69-.32 4zm.51 11.12c1.2-2.23 2.11-4.62 2.76-7.12h5.9c-1.93 3.31-4.99 5.86-8.66 7.12zm3.53-11.12c.16-1.31.28-2.64.28-4 0-1.36-.11-2.69-.28-4h6.75c.33 1.28.53 2.62.53 4s-.19 2.72-.53 4h-6.75z"/></svg>
              </a>
              <span className="domain-sale">
                <a href="" className="domain-btn btn-fav">Only fav</a>
              </span>
            </p>
          </div>
        </div>
        <div className="domain-item">
          <div className="domain-info">
            <h2 className="domain-name">updat3.xyz</h2>
            <p className="domain-action">
              <a href="" className="domain-whois" title="whois">
                <svg width="16" height="16" viewBox="0 0 48 48"><path d="M0 0h48v48h-48z" fill="none"/><path d="M23.99 4c-11.05 0-19.99 8.95-19.99 20s8.94 20 19.99 20c11.05 0 20.01-8.95 20.01-20s-8.96-20-20.01-20zm13.85 12h-5.9c-.65-2.5-1.56-4.9-2.76-7.12 3.68 1.26 6.74 3.81 8.66 7.12zm-13.84-7.93c1.67 2.4 2.97 5.07 3.82 7.93h-7.64c.85-2.86 2.15-5.53 3.82-7.93zm-15.48 19.93c-.33-1.28-.52-2.62-.52-4s.19-2.72.52-4h6.75c-.16 1.31-.27 2.64-.27 4 0 1.36.11 2.69.28 4h-6.76zm1.63 4h5.9c.65 2.5 1.56 4.9 2.76 7.13-3.68-1.26-6.74-3.82-8.66-7.13zm5.9-16h-5.9c1.92-3.31 4.98-5.87 8.66-7.13-1.2 2.23-2.11 4.63-2.76 7.13zm7.95 23.93c-1.66-2.4-2.96-5.07-3.82-7.93h7.64c-.86 2.86-2.16 5.53-3.82 7.93zm4.68-11.93h-9.36c-.19-1.31-.32-2.64-.32-4 0-1.36.13-2.69.32-4h9.36c.19 1.31.32 2.64.32 4 0 1.36-.13 2.69-.32 4zm.51 11.12c1.2-2.23 2.11-4.62 2.76-7.12h5.9c-1.93 3.31-4.99 5.86-8.66 7.12zm3.53-11.12c.16-1.31.28-2.64.28-4 0-1.36-.11-2.69-.28-4h6.75c.33 1.28.53 2.62.53 4s-.19 2.72-.53 4h-6.75z"/></svg>
              </a>
              <span className="domain-sale">
                <strong className="domain-price">$39,238</strong>
                <span>or</span>
                <a href="" className="domain-btn btn-offer">Make offer</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

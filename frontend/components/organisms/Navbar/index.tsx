import Image from "next/image";

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            {/* <Image src="/icon/logo.svg" width={60} height={60} /> */}
          </a>
        </div>
      </nav>
    </section>
  );
}

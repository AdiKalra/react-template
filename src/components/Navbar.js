import React from "react";

function Navbar() {
  return (
    <div className="navbar-container bg-transparent z-3 position-relative">
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid p-2 px-4">
          <a class="navbar-brand" href="/">
            <h1 className="white">Agency</h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  HOME
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/">
                  ABOUT US
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  TEAM
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/">
                  SERVICE
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  PROCESS
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/">
                  CLIENTS
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/">
                  WORK
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import { useState } from "react";


    function NavBar({ before, next, PreviousDisabled, NextDisabled }) {
        return (
          <div>
            <button onClick={before} disabled={PreviousDisabled}>
              Précédent
            </button>
            <button onClick={next} disabled={NextDisabled}>
              Suivant
            </button>
          </div>
        );
      }
export default NavBar;

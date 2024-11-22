import React from 'react'
import { Button } from './ui/button'
import Searchbar from './Searchbar'
import FileUploader from './FileUploader'

const Header = () => {
  return (
    <header className="header">
      <Searchbar />

      <div className="header-wrapper">
        <FileUploader />

        <form>
          <Button type="submit" className="sign-out-btn">
            Log out
          </Button>
        </form>
      </div>
    </header>
  );
}

export default Header
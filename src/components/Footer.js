import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}. Developed by{" "}
        <a href="https://dms.codes/">Digital Mind Solutions LTD.</a>
      </p>
    </footer>
  )
}

export default Footer

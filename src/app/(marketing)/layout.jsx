import React from 'react'
import '../globals.css'

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
  };

const layoutMarketing = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                Marketing Layout
                {children}
            </body>
        </html>
    )
}

export default layoutMarketing
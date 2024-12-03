import { memo, FC } from 'react'

const Footer: FC = () => {
    return (
        <footer className="flex justify-center items-center py-3 bg-light">
            <p className="mb-0">&copy; 2024 &nbsp;
                <a href="https://www.linkedin.com/in/mogamaal/" target="_blank"
                    className="italic">
                    <span className="special">DevJimmy</span>
                </a>. All rights reserved.
            </p>
        </footer>
    )
}
export default memo(Footer) 
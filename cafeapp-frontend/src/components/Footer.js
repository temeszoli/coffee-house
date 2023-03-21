import {BsGithub} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {GrLinkedin} from 'react-icons/gr';
import {Link} from 'react-router-dom';

export default function Footer(){
    return(
        <footer>
            <div>&copy;2023 | <a href="/">Premium Coffee House</a></div>
            <p>Made by: Temesvári Zoltán</p>
            <h1>
                <Link to='https://github.com/temeszoli'><BsGithub /></Link>{' '}
                <a href="mailto:temeszoli18@gmail.com"><AiOutlineMail /></a>{' '}
                <Link to='https://www.linkedin.com/in/zoltán-temesvári-9635231a7/'><GrLinkedin /></Link></h1>
        </footer>
    );
}
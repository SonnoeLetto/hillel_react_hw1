import { Component } from "react";

export class NewsItem extends Component {
    render() {
        const {title, description, date, categories, link, photo, author, isSpecial} = this.props;
        console.log(categories)
        const categoriesList = categories.map((category) => (
            <li key={category.id}>{category.name}</li>
        ))
        return (
            <div style={{backgroundColor: isSpecial && 'red'}}>
                {isSpecial && 
                    <p>IS SPECIAL</p>
                }
                
                <div style={{display: 'flex' }}>
                    <div>
                        <h3>{title} | <span>{date}</span> | <span>{author}</span></h3>
                        <p dangerouslySetInnerHTML={{ __html: description }}></p>
                        {link && <a href={link}>{link}</a>}
                    </div>
                        {photo && <img width={250} src={photo} alt="" />}
                </div>
                
                <ul>
                    { categoriesList }
                </ul>
            </div>
        )

    }
}
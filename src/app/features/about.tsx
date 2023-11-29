import { type FC } from "react"
import { Section } from "../components/section"

import data from "public/about.json";

export const About: FC = () => {
    return (
        <div className="border-t-[1px] border-t-s3">
        <Section.Container id="about">
          <Section.Header image={'/icons/iso.svg'} title="about"/>
          <Section.Body>
            <Section.Article 
                title={data.title}
                buttons={data.buttons}
                body={data.body}/>
            <Section.Graphics 
                src={data.imageUrl} 
                alt="" 
                height={350} 
                width={500} />
          </Section.Body>
        </Section.Container>
      </div>
    )
}
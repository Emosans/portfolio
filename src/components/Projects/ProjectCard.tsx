interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  techStack: string;
  image: string;
  link: string;
}

export default function ProjectCard({
  number,
  title,
  description,
  techStack,
  image,
  link,
}: ProjectCardProps) {
  return (
    <div className="col-xs-12">
      <img src={image} className="img-responsive" alt={title} />
      <div className="card-container">
        <div className="text-center">
          <h1 className="h2">
            <a href={link} style={{color:'inherit'}}>
              {number} : {title}
            </a>
          </h1>
        </div>
        <p className="text-center">Tech Stack - {techStack}</p>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
}

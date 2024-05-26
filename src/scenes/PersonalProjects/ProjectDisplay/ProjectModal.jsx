import { useEffect } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';
import Button from '../../../components/Elements/Button/Button';
import BaseModal from '../../../components/Modals/BaseModal';
import { useModal } from '../../../hooks/modalHook';
import ProjectInfo from '../ProjectInfo';
import s from './ProjectModal.module.scss';

const ProjectModal = () => {
  const { id } = useParams();
  const { image, title, links, technologies } = ProjectInfo.find(
    (p) => id === p.id,
  );
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    toggleModal();
  }, [toggleModal]);

  return (
    <BaseModal show={isVisible} onClose={toggleModal}>
      <div className={s.cardWrapper}>
        <LazyLoadImage
          alt="project-img"
          src={image.src}
          effect="blur"
          width="100%"
          wrapperClassName={s.image}
          placeholderSrc={image.placeholderSrc}
        />

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>

          <div className={s.technologies}>
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>

        <div className={s.cardFooter}>
          <Button
            style={{ width: '12rem' }}
            className="primary"
            href={links.site}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp; View project
          </Button>

          {!!links.repo && (
            <Button
              style={{ width: '12rem' }}
              className="primary"
              href={links.repo}
              target="_blank"
            >
              <BiLinkExternal /> &nbsp; Know more
            </Button>
          )}
        </div>
      </div>
    </BaseModal>
  );
};

export default ProjectModal;
import { useState } from 'react';
import { Container, Modal } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import needAuth from '@/utils/HOC/needAuth'
import Style from './style';

import Head from './sections/Head';
import JobTitle from './sections/JobTitle';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';
import EditAvatarModal from './modals/EditAvatar';
import EditJobTitleModal from './modals/EditJobTitle';
import EditAboutModal from './modals/EditAbout';
import EditHourlyRateModal from './modals/EditHourlyRate';
import AddToPortfolioModal from './modals/AddToPortfolio';
import EditSkillsModal from './modals/EditSkills';


const Profile = () => {
  const user = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<keyof typeof modals>("AVATAR");
  const modals = {
    AVATAR: <EditAvatarModal dispatch={dispatch} user={user} />,
    ABOUT: <EditAboutModal
      dispatch={dispatch}
      user={user}
      close={() => { setIsModalOpen(false) }} />,
    JOB_TITLE: <EditJobTitleModal
      dispatch={dispatch}
      user={user}
      close={() => { setIsModalOpen(false) }} />,
    HOURLY_RATE: <EditHourlyRateModal
      dispatch={dispatch}
      user={user}
      close={() => { setIsModalOpen(false) }} />,
    ADD_TO_PORTFOLIO: <AddToPortfolioModal
      dispatch={dispatch}
      user={user}
      close={() => { setIsModalOpen(false) }} />,
    SKILLS: <EditSkillsModal
      dispatch={dispatch}
      user={user}
      close={() => { setIsModalOpen(false) }} />,
  }

  const edit = (modalName: keyof typeof modals) => {
    setIsModalOpen(true);
    setActiveModal(modalName);
  }

  return (
    <>
      {isModalOpen && <Modal close={() => setIsModalOpen(false)}>
        {modals[activeModal]}
      </Modal>}
      <Container>
        <Style>
          <Head user={user} editAvatar={() => edit("AVATAR")} />
          <JobTitle
            user={user}
            editAbout={() => edit("ABOUT")}
            editJobTitle={() => edit("JOB_TITLE")}
            editHourlyRate={() => edit("HOURLY_RATE")}
          />
          <Portfolio user={user} addToPortfolio={() => edit("ADD_TO_PORTFOLIO")} />
          <Skills skills={user.skills} editSkills={() => edit("SKILLS")} />
        </Style >
      </Container>
    </>
  )
}

export default needAuth(Profile)
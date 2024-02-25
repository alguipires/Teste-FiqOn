import React, { useEffect, useState } from 'react';
import AppBar from '../../components/Appbar/AppBar';
import './List.css';
import { getAllPages } from '../../api/axiosInstance';
import { getSavedUser } from '../../utils/sessionStorageLogin';

// import AvatarIcon from '../AvatarIcon/index';

// import BasicCard from '../../components/BasicCard/BasicCard';
// import TextField from '../../components/TextFild/TextFild';
// import Profile from '../../components/ProfileHome/ProfileHome';
// import Modal from '../../components/Modal/ModalAddProject';
// import { getSavedUser } from '../../utils/sessionStorageLogin';
// import { projectWhitGoogle, projectsWithUser } from '../../api/axiosInstance';
// import ModalToView from '../../components/Modal/ModalToView';
// import ModalExcluir from '../../components/Modal/ModalExcluir';
// import ModalEditProject from '../../components/Modal/ModalEditProject';
// import ModalDeletado from '../../components/Modal/ModalDeletado';
// import ModalAdicionado from '../../components/Modal/ModalAdicionado';
// import useStore from '../../zustand/store';

function List() {
  // const [
  //   openModal,
  //   indexProject,
  //   currentProjects,
  //   updateCurrentProjects,
  //   openDeleteProjectModal,
  //   openEditProjectModal,
  //   openDeleteSuccessModal,
  //   inputSearch,
  //   openEditSuccessModal,
  // ] = useStore((state) => [
  //   state.openModal,
  //   state.indexProject,
  //   state.currentProjects,
  //   state.updateCurrentProjects,
  //   state.openDeleteProjectModal,
  //   state.openEditProjectModal,
  //   state.openDeleteSuccessModal,
  //   state.inputSearch,
  //   state.openEditSuccessModal,
  // ]);

  // useEffect(() => {
  //   const loadingProjects = async () => {
  //     const tokenGoogle = await getSavedUser('@AuthFirebase:token');
  //     const tokenBackend = await getSavedUser('@AuthBackend:token');
  //     const user = await getSavedUser('@AuthFirebase:user');

  //     if (
  //       Object.keys(tokenGoogle).length !== 0 &&
  //       Object.keys(user).length !== 0
  //     ) {
  //       const projectsLoginGoogle = await projectWhitGoogle(
  //         tokenGoogle,
  //         user.uid
  //       );
  //       updateCurrentProjects(projectsLoginGoogle);
  //       return;
  //     }

  //     if (Object.keys(tokenBackend).length !== 0) {
  //       const projectsLoginBackend = await projectsWithUser(tokenBackend);
  //       updateCurrentProjects(projectsLoginBackend);
  //       return;
  //     }
  //   };
  //   loadingProjects();
  // }, [openModal]);

  // const containsProjects = currentProjects?.length > 0;
  // const projectByIndex = containsProjects && currentProjects[indexProject];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/list');
  //       const data = response.data;
  //       // Process the data here
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  const [pages, setPages] = useState([]);

  useEffect(() => {
    const loadingProjects = async () => {
      const allPagesAPI = await getAllPages(getSavedUser('api_token'), 2);
      setPages(allPagesAPI);
    };
    loadingProjects();
  }, []);

  //TODO fazer metodo para percorrer a lista da api e listar na tela ate que cheg ano parametro de retorno pagenext= false, apos concatenar as respostas e enviar apra o outro endpoint

  return (
    <section className="portifolio_container">
      <AppBar />
      <div className="container_profile">
        <h1>profile</h1>
        {/* <Profile /> */}
      </div>
      <section className="container_my_project">
        <h2 className="container_text_my_projects">Meus Projetos</h2>

        <div className="container_input_search">
          <h1>textfield</h1>
          <h2>lista abaixo teste</h2>
          {/* <p>{pages}</p> */}
          {/* <TextField /> */}
        </div>
        {/* <div className="container_basic_card">
          {containsProjects ? (
            currentProjects
              ?.filter((project) =>
                project.tag.toLowerCase().includes(inputSearch.toLowerCase())
              )
              .map(({ id, url, imgFile, tag, createdAt }, index) => {
                return (
                  <BasicCard
                    key={id}
                    projectId={id}
                    index={index}
                    link={url}
                    urlImg={imgFile}
                    tag={tag}
                    createdAt={createdAt}
                  />
                );
              })
          ) : (
            <BasicCard />
          )}
        </div> */}
      </section>

      {/* {containsProjects ? (
        <ModalToView
          tag={projectByIndex?.tag}
          title={projectByIndex?.title}
          link={projectByIndex?.url}
          description={projectByIndex?.description}
          urlImg={projectByIndex?.imgFile}
          createdAt={projectByIndex?.createdAt}
        />
      ) : (
        <div>
          <Modal />
        </div>
      )} */}
      {/* {openDeleteProjectModal && <ModalExcluir />}
      {openEditProjectModal && <ModalEditProject />}
      {openDeleteSuccessModal && <ModalDeletado />}
      {openEditSuccessModal && <ModalAdicionado />} */}
    </section>
  );
}
export default List;

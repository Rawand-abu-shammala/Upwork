import { useState } from 'react'
import { Container, SideModal } from '@/components'
import Style from './style'
import needAuth from '@/utils/HOC/needAuth';
import User from '@/components/pages/User';
import Search from '@/components/pages/Search';
import JobsTabs from '@/components/pages/JobsTabs';
import IJob from '@/types/Job';
import JobDetail from '@/components/pages/JobDetail';

const Home = () => {
    const [job, setJop] = useState<IJob | null>(null);
    const [isJopModalOpen, setIsJopModalOpen] = useState(false);

    const onJobClick = (jobData: IJob) => {
        setIsJopModalOpen(true);
        setJop(jobData)
    }

    return (
        <>
            {isJopModalOpen && <SideModal close={() => setIsJopModalOpen(false)}>
                <JobDetail job={job as IJob} />
            </SideModal>}
            <Container>
                <Style>
                    <div>
                        <Search />
                        <JobsTabs onJobClick={onJobClick} />
                    </div>
                    <User />
                </Style>
            </Container>
        </>
    )
}

export default needAuth(Home)
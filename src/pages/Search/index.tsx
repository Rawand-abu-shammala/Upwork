import { Container, SideModal } from '@/components'
import JobDetail from '@/components/pages/JobDetail'
import SavedJobs from '@/components/pages/SavedJobs'
import Tabs from '@/components/pages/Tabs'
import { useState } from 'react'
import IJob from '@/types/Job'

import needAuth from '@/utils/HOC/needAuth'
import SearchTab from './SearchTab'
import Style from './style'

const Search = () => {
    const [job, setJop] = useState<IJob | null>(null);
    const [isJopModalOpen, setIsJopModalOpen] = useState(false);

    const onJobClick = (jobData: IJob) => {
        setIsJopModalOpen(true);
        setJop(jobData)
    }
    return (<>
        {isJopModalOpen && <SideModal close={() => setIsJopModalOpen(false)}>
            <JobDetail job={job as IJob} />
        </SideModal>}
        <Container>
            <Style>
                <Tabs tabs={[
                    { title: "Search", content: <SearchTab onJobClick={onJobClick} /> },
                    { title: "Saved Jobs", content: <SavedJobs onJobClick={onJobClick} /> }
                ]} />
            </Style>
        </Container>
    </>
    )
}

export default needAuth(Search)
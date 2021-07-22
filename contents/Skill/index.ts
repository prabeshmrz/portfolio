import { Experience } from "../../utils/Type/Skill"

export const Skills = {
    language: {
        labels: ['Java', 'Python', 'JavaScript', 'SpringBoot', 'Django', 'React', 'Angular'],
        datasets: [{
            label: '',
            backgroundColor: ['#e66f0099', '#37709f99', '#f0dc4e99', '#68bd4699', '#2caa7999', '#03d6ff99', '#de003099'],
            borderWidth: 0,
            data: [75, 65, 50, 80, 55, 65, 50]
        }],
    },
    tools: [
        'Docker',
        'Gitlab-CI',
        'AWS ECS',
        'Git',
        'JIRA',
        'TestNG',
        'Hasura',
        'IntelliJ IDEA',
        'VS Code',
        'Neovim'
    ]
}

export const Experiences: Experience[] = [
    {
        company: 'ITGlance',
        position: 'Full-Stack Developer (Intern)',
        duration: 'Jul. 2020 - Dec. 2020',
        roles: [
            'Built secure rest endpoints using spring boot',
            'Worked in various javascript frameworks like Angular and React',
            'Create and update the MySQL and Postgresql databases with li quibase migration.'
        ]
    },
    {
        company: 'ESamparka',
        position: 'Backend Developer',
        duration: 'Jan. 2021 - Present',
        roles: [
            'Create rest endpoints using springboot with unit test cases.',
            'Manage database creation and updation.',
            'Create dockerfile and handle gitlab-ci integration.',
            'Deploy application in aws.'
        ]
    }
].reverse()

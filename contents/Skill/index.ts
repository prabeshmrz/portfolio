import { Experience } from "../../utils/Type/Skill"

export const Skills = {
    skill: [
        {
            label: 'Java',
            data: 75
        },
        {
            label: 'Python',
            data: 65
        },
        {
            label: 'JavaScript',
            data: 50
        },
        {
            label: 'SpringBoot',
            data: 80
        },
        {
            label: 'Django',
            data: 55
        },
        {
            label: 'React',
            data: 65
        },
        {
            label: 'Angular',
            data: 50
        }
    ],
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

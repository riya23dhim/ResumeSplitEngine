export function normalizeData(response) {
    const data = response.resume_data;
    const blocks = [];
    //to convert incoming json to blocks line [block1,block2] to easily iterate
    // HEADER INFO
    blocks.push({
        type: 'header',
        name: data.name,
        designation: data.designation,
        email: data.email,
        phone: data.phone,
        address: data.address,
        github: data.github,
        linkedin: data.linkedin
    });

    // SUMMARY
    if (data.summary) {
        blocks.push({
            type: 'section_header',
            title: 'Summary'
        });

        blocks.push({
            type: 'summary',
            text: data.summary
        });
    }

    // EXPERIENCE
    if (data.experience?.length) {
        blocks.push({
            type: 'section_header',
            title: 'Experience'
        });

        data.experience.forEach(exp => {
            blocks.push({
                type: 'experience_item',
                role: exp.position,
                company: exp.company,
                duration: exp.duration
            });

            exp.description?.forEach(bullet => {
                blocks.push({
                    type: 'bullet',
                    text: bullet
                });
            });
        });
    }

    // EDUCATION
    if (data.education?.length) {
        blocks.push({
            type: 'section_header',
            title: 'Education'
        });

        data.education.forEach(edu => {
            blocks.push({
                type: 'education_item',
                degree: edu.degree,
                institution: edu.institution,
                year: edu.year
            });
        });
    }

    // PROJECTS
    if (data.projects?.length) {
        blocks.push({
            type: 'section_header',
            title: 'Projects'
        });

        data.projects.forEach(project => {
            blocks.push({
                type: 'project_item',
                name: project.name,
                technologies: project.technologies
            });

            project.description?.forEach(desc => {
                blocks.push({
                    type: 'bullet',
                    text: desc
                });
            });
        });
    }

    // SKILLS
    if (data.skills?.length) {
        blocks.push({
            type: 'section_header',
            title: 'Skills'
        });

        blocks.push({
            type: 'skills',
            items: data.skills
        });
    }

    // ACHIEVEMENTS
    if (data.achievements?.length) {
        blocks.push({
            type: 'section_header',
            title: 'Achievements'
        });

        data.achievements.forEach(item => {
            blocks.push({
                type: 'bullet',
                text: item
            });
        });
    }

    // PUBLICATIONS
    if (data.publications?.length) {
        blocks.push({
            type: 'section_header',
            title: 'Publications'
        });

        data.publications.forEach(pub => {
            blocks.push({
                type: 'publication_item',
                title: pub.title,
                venue: pub.venue
            });
        });
    }

    return blocks;
}

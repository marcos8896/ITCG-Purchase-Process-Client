export const filters  = {
    include: [

        { relation: 'provider' },
        { relation: 'concept_requisition' },
        { 
            relation: 'boss_department',
            scope: {
                include: {
                    relation: 'department'
                }
            }
        }
    ]
};

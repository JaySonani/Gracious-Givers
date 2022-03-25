export const period = {
    past : "past",
    ongoing : "ongoing",
    future : "future"
}

export const fundraiserStatus = {
    draft:'Draft', 
    active: 'Active', 
    deactivated: 'Deactivated', 
    completed: 'Completed', 
    pendingApproval: 'Pending Admin Approval'
}

export const causes = [
    'All',
    'Education',
    'Environment',
    'Animal Welfare',
];

export const apiBaseUrl = "http://localhost:5000/fundraiser"; 

export const defaultCurrency = "CAD";

export const fundraiserMaxActiveDays = 180;

export const allowedImageType = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
]
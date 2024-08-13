const plans = [
    {
        id: 1,
        name: "PRO",
        price: 10,
        validity: 30
    },
    {
        id: 2,
        name: "PRO",
        price: 20,
        validity: 60
    },
    {
        id: 3,
        name: "PRO",
        price: 29,
        validity: 90
    },
    {
        id: 4,
        name: "PRIME",
        price: 20,
        validity: 30
    },
    {
        id: 5,
        name: "PRIME",
        price: 40,
        validity: 60
    },
    {
        id: 6,
        name: "PRIME",
        price: 59,
        validity: 60
    }
]

// Get all Unique plan names
const uniquePlanNames = [...new Set(plans.map(plan => plan.name))];

// Group plans by name
const groupedPlans = plans.reduce((acc, plan) => {
    if (!acc[plan.name]) {
        acc[plan.name] = [];
    }
    acc[plan.name].push(plan);
    return acc;
}, {});

console.log(uniquePlanNames);
console.log(groupedPlans);
console.log(groupedPlans["PRO"])
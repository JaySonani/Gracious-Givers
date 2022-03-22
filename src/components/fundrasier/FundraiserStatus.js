export default function FundraiserStatus(props) {
    const status = props.statusValue;
    
    const draft = {
        color:'#6f6868',
    }

    const active = {
        color:'green',
    }

    const deactivated = {
        color:'red'
    }

    const completed = {
        color:'green'
    }

    const pendingApproval = {
        color:'orange'
    }

    return (
        
        <div id="fundraiser-status" 
            style={{fontWeight:'600', fontSize:'1.2rem'}}>
            {status === 'Active' && <span style={active}>Active</span> }
            {status === 'Draft' && <span style={draft}>Draft</span> }
            {status === 'Deactivated' && <span style={deactivated}>Deactivated</span>}
            {status === 'Completed' && <span style={completed}>Completed</span>}
            {status === 'Pending Admin Approval' && <span style={pendingApproval}>Pending Admin Approval</span>}
        </div>
    );

}
import React from 'react';
import { connect } from 'react-redux';

 function Input() {
    return <div>
        <button></button>
    </div>;
};

const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps)(Input);
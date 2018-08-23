import * as React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { AuthChild } from "../../hoc/requireAuth";

export interface ISocketProps extends React.Component<any> {
  auth: string;
  errorMessage: string;
  sockets: any;
  connectSocket: () => void;
  closeSocket: () => void;
  sendSocket: () => void;
}

class Dashboard extends React.Component<ISocketProps> {
  public static mapStateToProps(state: any) {
    return {
      sockets: state.sockets
    };
  }

  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    this.props.connectSocket();
  }

  public onSend = () => {
    this.props.sendSocket();
  };

  public onClose = () => {
    this.props.closeSocket();
  };
  public render() {
    console.log(this.props.sockets);

    return (
      <div>
        <h2>Dashboard</h2>
        <p>{this.props.sockets.message}</p>
        <button onClick={this.onSend}>Send Message</button>
        <button onClick={this.onClose}>Close Socket</button>
      </div>
    );
  }
}

export default connect(
  Dashboard.mapStateToProps,
  actions
)(AuthChild(Dashboard));

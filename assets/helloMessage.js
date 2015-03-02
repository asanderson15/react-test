/**
 * Created by aanderson on 3/1/15.
 */

var Glob = {};
Glob.data = {
  routes: [
      { tag: "N", name: "N-Judah", color: "003399", oppositeColor: "ffffff" },
      { tag: "33", name: "33-Stanyan", color: "660000", oppositeColor: "ffffff" }
  ]
};

var Route = React.createClass({

    propTypes: {
        tag: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        liStyle: React.PropTypes.object.isRequired
    },

    getDefaultProps: function() {
        return {
            tag: "n/a",
            name: "Unknown",
            liStyle: {
                backgroundColor: "#555555",
                color: "#ffffff"
            }
        };
    },

    render: function() {
        return (
            <li>
                <span style={this.props.liStyle}>
                    {this.props.tag}
                </span> -
                <span>
                    {this.props.name}
                </span>
            </li>
        );
    }
});



var RouteList = React.createClass({
    getInitialState: function() {
        return { data: Glob.data };
    },

    render: function() {
        return (
            <ul>
                {this.state.data.routes.map(function(rt) {
                    var liStyle = {
                        color: "#" + rt.oppositeColor,
                        backgroundColor: "#" + rt.color
                    };
                    return (
                        <Route key={rt.tag} ref={rt.tag} tag={rt.tag} name={rt.name} liStyle={liStyle} />
                    );
                })}
            </ul>
        );
    }
});




var HelloMessage = React.createClass({
    remove: function() {
        console.log("HERE");
        Glob.data.routes.pop();
        this.refs.routeList.setState({data: Glob.data});
    },

    render: function() {
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
                <button onClick={this.remove}>Remove</button>
                <RouteList ref="routeList" />
            </div>
        );
    }
});

React.render(<HelloMessage name="Adam" />, document.getElementById("body"));






//React.render(<RouteList />, document.getElementById("routeList"));
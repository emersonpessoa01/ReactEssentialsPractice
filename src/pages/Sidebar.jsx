import PropTypes from 'prop-types';

const Sidebar = ({ sidebarOpen, darkMode }) => {
  const menuItems = [
    { name: "Dashboard", 
      icon: "📊", 
      path: "/modules/dashboard" 
    },
    { name: "Users", 
      icon: "👥", 
      path: "/modules/users" 
    },
    { name: "Products", 
      icon: "📦", 
      path: "/modules/products" 
    },
    { name: "Analytics", 
      icon: "📈", 
      path: "/modules/analytics" 
    },
    { name: "Settings", 
      icon: "⚙️", 
      path: "/modules/settings" 
    },
  ];

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}
    >
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className={`flex items-center space-x-3 p-3 rounded-lg ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                } transition-colors duration-200`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
};


export default Sidebar;

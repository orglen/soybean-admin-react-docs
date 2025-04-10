import { Cpu, GitBranch, Globe } from 'lucide-react';
import React from 'react';

const GlobalFooter = () => {
  return (
    <footer className="py-10 bg-black relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyQTJFMzUiIG9wYWNpdHk9Ii4zIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9Ii41Ij48cGF0aCBkPSJNMzAgMEwzMCA2ME0wIDMwTDYwIDMwIi8+PC9nPjwvc3ZnPg==')] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                alt="Soybean Admin Logo"
                className="w-10 h-10"
                src="/favicon.svg"
              />
              <h3 className="text-xl font-bold text-white">React SoybeanAdmin</h3>
            </div>
            <p className="text-gray-400 mb-4">清新优雅的中后台管理模板，采用最新前端技术栈</p>
            <div className="flex space-x-4">
              <a
                className="text-gray-400 hover:text-blue-400 transition-colors"
                href="#"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                className="text-gray-400 hover:text-blue-400 transition-colors"
                href="#"
              >
                <GitBranch className="w-5 h-5" />
              </a>
              <a
                className="text-gray-400 hover:text-blue-400 transition-colors"
                href="#"
              >
                <Cpu className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">产品</h4>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  href="#"
                >
                  特性
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  href="#"
                >
                  文档
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  href="#"
                >
                  示例
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  href="#"
                >
                  更新日志
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">资源</h4>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  href="#"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  href="#"
                >
                  Gitee
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  href="#"
                >
                  NPM包
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  href="#"
                >
                  社区
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">联系我们</h4>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  href="#"
                >
                  QQ交流群
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  href="#"
                >
                  微信群
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  href="#"
                >
                  邮箱
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  href="#"
                >
                  提交问题
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 React SoybeanAdmin. MIT License.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              className="text-gray-500 hover:text-gray-300 text-sm"
              href="#"
            >
              隐私政策
            </a>
            <a
              className="text-gray-500 hover:text-gray-300 text-sm"
              href="#"
            >
              使用条款
            </a>
            <a
              className="text-gray-500 hover:text-gray-300 text-sm"
              href="#"
            >
              关于我们
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;

import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import {
  useVersions,
  useLatestVersion,
} from '@docusaurus/plugin-content-docs/client';

const Version: React.FC = () => {
  const versions = useVersions(undefined);
  const latestVersion = useLatestVersion(undefined);
  const currentVersion = versions.find((version) => version.name === 'current');
  const pastVersions = versions.filter(
    (version) => version !== latestVersion && version.name !== 'current',
  );
  const stableVersion = latestVersion;
  const repoUrl = `https://github.com/microsoft/playwright`;

  return (
    <Layout
      title="版本"
      description="Docusaurus 2 版本頁面列出所有文件站點版本">
      <main className="container margin-vert--lg">
        <h1>版本</h1>

        {stableVersion && (
          <div className="margin-bottom--lg">
            <h3 id="next">最新版本</h3>
            <table>
              <tbody>
                <tr>
                  <th>{stableVersion.name}</th>
                  <td>
                    <Link to={stableVersion.path + '/api/class-playwright'}>文件</Link>
                  </td>
                  <td>
                    <a href={`${repoUrl}/releases/tag/v${stableVersion.name}.0`}>
                      發行說明
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {currentVersion !== latestVersion && (
          <div className="margin-bottom--lg">
            <h3 id="next">下一版本 (未發佈)</h3>
            <table>
              <tbody>
                <tr>
                  <th>Next</th>
                  <td>
                    <Link to={currentVersion.path + '/api/class-playwright'}>文件</Link>
                  </td>
                  <td>
                    <a href={repoUrl}>原始碼</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {pastVersions.length > 0 && (
          <div className="margin-bottom--lg">
            <h3 id="archive">過去版本</h3>
            <table>
              <tbody>
                {pastVersions.map((version) => (
                  <tr key={version.name}>
                    <th>{version.label}</th>
                    <td>
                      <Link to={version.path + '/api/class-playwright'}>文件</Link>
                    </td>
                    <td>
                      <a href={`${repoUrl}/releases/tag/v${version.name}.0`}>
                        發行說明
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </Layout>
  );
}

export default Version;

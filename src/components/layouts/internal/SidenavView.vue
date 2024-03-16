<template>
    <aside aria-label="Sidenav" id="drawer-navigation" class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white md:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="overflow-y-auto py-5 px-3 h-full">
            <ul class="space-y-1">
                <li><SidebarLink :title="'Dashboard'" :routeName="'dashboard'" :iconName="'DashboardIcon'" /></li>
                <li>
                    <SidebarLink :title="'Gestão condominal'" :iconName="'BuildingsIcon'" :id="'btn-dropdown-gestao-condominal'" :aria-controls="'gestao-condominal'" :data-collapse-toggle="'gestao-condominal'" />
                    <!--Dropdown content-->
                    <ul id="gestao-condominal" class="hidden pb-2 pt-1 space-y-1">
                        <li class="ml-3"><SidebarLink :title="'Condomínio'" :routeName="'dashboard'" :iconName="'CondominiumIcon'" /></li>
                        <li class="ml-3"><SidebarLink :title="'Prédios'" :routeName="'dashboard'" :iconName="'BuildingIcon'" /></li>
                        <li class="ml-3"><SidebarLink :title="'Funcionários'" :routeName="'dashboard'" :iconName="'EmployeesIcon'" /></li>
                        <li class="ml-3"><SidebarLink :title="'Condôminos'" :routeName="'condominium-owners'" :iconName="'CondominiumOwnersIcon'" /></li>
                        <li class="ml-3"><SidebarLink :title="'Avisos'" :routeName="'dashboard'" :iconName="'ApartmentIcon'" /></li>
                        <li class="ml-3"><SidebarLink :title="'Apartamentos'" :routeName="'dashboard'" :iconName="'BuilboardIcon'" /></li>
                        <li class="ml-3"><SidebarLink :title="'Visitantes'" :routeName="'dashboard'" :iconName="'VisitorsIcon'" /></li>
                        <li class="ml-3"><SidebarLink :title="'Infrações'" :routeName="'dashboard'" :iconName="'WarningIcon'" /></li>
                    </ul>
                </li>
                <li><SidebarLink :title="'Reservas'" :routeName="'dashboard'" :iconName="'ReservationIcon'" /></li>
                <li><SidebarLink :title="'Veículos'" :routeName="'dashboard'" :iconName="'VehicleIcon'" /></li>
                <li><SidebarLink :title="'Pets'" :routeName="'dashboard'" :iconName="'PetsIcon'" /></li>
                <li><SidebarLink :title="'Entradas e saídas'" :routeName="'dashboard'" :iconName="'EntryAndExitIcon'" /></li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
    import SidebarLink from '../../content-components/buttons/SidebarLink.vue';
</script>